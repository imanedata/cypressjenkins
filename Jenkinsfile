pipeline{
    agent {
        docker {
            image "cypress/browsers"
            args "--entrypoint='' "
        }

        
    }
    stages{
        stage('npm install'){
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