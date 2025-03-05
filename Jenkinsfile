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
                sh 'npm install'
            }
        }
        stage('run cypress'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
}