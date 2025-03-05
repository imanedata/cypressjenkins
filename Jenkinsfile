pipeline{
    agent {
        docker {
            image "cypress/browsers"
            args "--entrypoint='' "
        }

        
    }
    stages{
        stage("cypress version"){
            stapes{
                sh 'cypress --version'
                sh 'npx cypress open'
            }

        }
    }
    
}