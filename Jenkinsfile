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
                sh 'ehco "affichage"'
            }
        }
        stage('run cypress'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
}