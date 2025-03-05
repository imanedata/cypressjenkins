pipeline{

    agent{
        docker{
            image "cypress/browsers"
            args "--entrypoint=''"
        }
    }

    stages{
        stage('Installation node_modules'){
            steps{
                sh 'npm ci'
            }
        }
        stage('run cypress'){
            steps{
                sh 'npx cypress run --env grepTags= @regression --reporter junit \--reporter-options "mochaFile=results/my-test-output.xml,toConsole=true"'
            }
        }
    }
    post {
    always {
        junit "results/**/*.xml"
    }
}
}