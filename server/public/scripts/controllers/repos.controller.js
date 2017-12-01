myApp.controller('ReposController', function(GithubService){
   
    var vm = this;

    vm.repos = GithubService.repos;

    GithubService.githubRepos();
    
});