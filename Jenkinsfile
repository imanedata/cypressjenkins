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
        stage('Tests e2e'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
}