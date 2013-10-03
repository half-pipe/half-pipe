require 'active_support/ordered_options'

namespace :half_pipe do

  half_pipe = ActiveSupport::OrderedOptions.new

  task :clean do
    Rake::Task["half_pipe:environment"].invoke
    Rake::Task["half_pipe:execute_grunt_command"].invoke("clean")
  end

  task :execute_grunt_command, [:command] => ["half_pipe:environment",
                                              "half_pipe:generate_grunt_runner"] do |_,params|
    half_pipe.grunt_command = "#{half_pipe.grunt_runner} #{params[:command]}"
    puts "executing: #{half_pipe.grunt_command.inspect}"
    exec half_pipe.grunt_command
  end

  task :generate_grunt_runner do
    paths = %W(#{half_pipe.cwd} node_modules .bin grunt)
    half_pipe.grunt_runner = File.join(*paths)
  end

  task :environment do

    # For great Capistrano
    half_pipe.cwd = (respond_to?(:release_path) ? release_path : Dir.pwd)

  end

  namespace :precompile do

    task :noop

    task :all do
      Rake::Task["half_pipe:environment"].invoke
      Rake::Task["half_pipe:execute_grunt_command"].invoke("build:public")
    end

  end

  desc "Precompile half-pipe-managed assets"
  task :precompile => ["half_pipe:precompile:all"]

end

task "assets:precompile" => ["half_pipe:precompile"]
task "assets:clean" => ["half_pipe:clean"]
task "assets:clobber" => ["half_pipe:clean"]
task "assets:environemnt" => ["half_pipe:environment"]
