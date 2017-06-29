/**
 * Created by Beatrice.Chiriac on 6/29/2017.
 */
hrApp.service('UserService', function () {

    this.users=[];
    this.save = function(user){
        this.users.push(user);
    }



});