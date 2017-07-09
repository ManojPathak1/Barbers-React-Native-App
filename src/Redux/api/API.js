import axios from 'axios';

var rootUrl= "http://52.38.132.133/sms/";

export const getStores = ()=>{
    var url = rootUrl+"getStores";
    return axios.post(url, { latitude: "78235", user_id: "56", user_type: "3", longitude: "6253", device_type: "iOS" })
            .then(function(response){
                return response.data.Result;
            })
            .catch(function(error){
                console.log(error);
            });
}

/*
{ "email": "manoj.pathak@gmail.com",
"password": "123456",
"mobile": "+918527333451",
"device_token": "device_token_of_mobile",
"device_type": "android",
"latitude": "78235",
"longitude": "62532",
"user_type":"3" }
*/
export const register = (user)=>{
    var url = rootUrl+"registration";
    return axios.post(url,
        { email: "manoj.pathak@gmail.com",
        password: "123456",
        mobile: "+918527333451",
        device_token: "59739014428787587945898",
        device_type: "android",
        latitude: "78235",
        longitude: "62532",
        user_type:"3" })
            .then(function(response){
                var data = response.data;
                if(data.status=="200")
                    return {isRegistered: true, data: data.Result};
                else
                    return {isRegistered: false, message: "User already exist"};
            })
            .catch(function(error){
                console.log(error);
            });
}

export const login = (user)=>{
    var url = rootUrl+"login";
    return axios.post(url, {email: user.email, password: user.password, device_token: "59739014428787587945898", device_type: "iOS" })
        .then(function(response){
            var data = response.data;
            if(data.status=="200")
                return {isLoggedIn: true, userData: data.Result};
            else
                return {isLoggedIn: false, message: data.message};
        })
        .catch(function(error){
            console.log(error);
        });
}

export const getProfessionals = ()=>{
    var url = rootUrl+"professional-list";
    return axios.post(url, {id: "1"})
        .then(function(response){
            var data = response.data;
            if(data.status=="200")
                return data.Result;
        })
        .catch(function(error){
            console.log(error);
        });
}

export const getProfile = (userObj)=>{
    var url = rootUrl+"get-profile";
    return axios.post(url, {id: userObj.id})
        .then(function(response){
            var data = response.data;
            if(data.status=="200")
                return data.Result;
        })
        .catch(function(error){
            console.log(error);
        });
}
