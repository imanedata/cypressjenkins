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
                sh 'npx cypress open'
            
            }
        }
    }
    
}