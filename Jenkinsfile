pipeline{

    agent{
        docker{
            image "cypress/browsers"
            args "--entrypoint=''"
        }
    }
    parameters {
        string(name: 'TEST_CASE', description: 'tags')
        string(name: 'TAGS', description: 'tags')
    }
    stages{
        stage('Installation node_modules'){
            steps{
                sh 'npm ci'
            }
        }
        stage('run cypress'){
            steps{
            script{
                    if(params.TEST_CASE != null){
                      sh "npx cypress run --env grepTags=@${params.TEST_CASE}"
                    }else{
                        sh "${params.TAGS}.sh"
                  }
            }
            }
        }
    }
    post {
    always {
        junit "results/**/*.xml"
    }
}
}