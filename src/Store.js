import createStore from "unistore";
import axios from "axios";
import { stat } from "fs";

const initialState = {
    is_login:false,
    password:"",
    merchDetail:"",
    eventDetail:"",
    bandDetail:"",
    bandMerch:"",
    bandEvent:"",
    apikey:"",
    username:"",
    useraddress:"",
    usermail:"",
    userphone:"",
    transaksievent:"",
    transaksimerch:"",
    eventTrans:[],
    merchTrans:[],
    quantity:"",
    bandname: "",
    bandaddress: "",
    bandmail: "",
    bandphone: "",
    bandphoto: "",
    banddesc:"",
    status:"",
    merchData:[],
    eventData:[],
    merch_name:"",
    price:"",
    kategori:"",
    quantity:"",
    merch_desc:"",
    merch_photo:"",
    event_name:"",
    location:"",
    event_desc:"",
    event_photo:"",
    bandeventsssss:"",

    // merchId:""
}

export const store = createStore(initialState);

export const actions = store => ({
    setField: (state, e) => {
   
        return { [e.target.name]: e.target.value };
    },
    postLogout: state => {
        return { isLogin: false,
            apikey:"",
            username:"",
            useraddress:"",
            usermail:"",
            userphone:""
         };
    }, 
    postLogin: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/login/user"
        const headers = {
            method:'post',
            url: url,
            headers:{            
            'Content-Type': 'application/json'},
            data:{
                username: state.username, password: state.password
            }
          };
        await axios(headers)
            .then(function(response) {
                // console.log("enek ta gak",response.data.token);
                if (response.data.status === 200) {
                    console.log("ikilo",response.data.token)
                    store.setState({
                        isLogin: true,
                        apikey: response.data.token,
                        status: "user"
                    });
                }
            })
       
    },
    postLoginband: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/login/band"
        const headers = {
            method:'post',
            url: url,
            headers:{            
            'Content-Type': 'application/json'},
            data:{
                username: state.username, password: state.password
            }
          };
        await axios(headers)
            .then(function(response) {
                // console.log("enek ta gak",response.data.token);
                if (response.data.status === "success") {
                    console.log("ikilo",response.data.token)
                    store.setState({
                        isLogin: true,
                        apikey: response.data.token,
                        status: "band"
                    });
                }
            })
       
    },
    postRegister: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/user/profile"
        const headers = {
            method:'post',
            url: url,
            headers:{            
            'Content-Type': 'application/json'},
            data:{
                username: state.username, 
                password: state.password,
                email: state.usermail,
                address: state.useraddress,
                phone: state.userphone
            }
          };
        await axios(headers)
       
    },
    postRegisterband: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/band/profile"
        const headers = {
            method:'post',
            url: url,
            headers:{            
            'Content-Type': 'application/json'},
            data:{
                username: state.username, 
                password: state.password,
                bandName: state.bandname,
                bandDesc: state.banddesc,
                bandMail: state.bandmail,
                bandAddress: state.bandaddress,
                bandPhone: state.bandphone,
                bandPhoto: state.bandphoto
            }
          };
        await axios(headers)
       
    },

    // setMerchId: async (state, value) => {
    //     store.setState({
    //         merchId: value
    //     })
        
    // }

    merchDetails: async (state, keyword) => {
        store.setState({merchDetail: keyword})
        },
    eventDetails: async (state, keyword) => {
        store.setState({eventDetail: keyword})
        },
    bandDetails: async (state, keyword) => {
        return{bandDetail: keyword}
        },
    bandMerchs: async (state, keyword) => {
        return{bandMerch: keyword}
        },
    bandEvents: async (state, keyword) => {
        console.log("ikiiku", keyword)
        return{bandEvent: keyword}
        },
    bandEventss: async (state, keyword) => {
        console.log("ikiiku", keyword)
        return{bandeventsssss: keyword}
            },
    getUserData: async state =>{
        const url = "http://localhost:8010/proxy/user/profile"
        console.log("cuuukkkkk",state.apikey)
        const headers = {
            method:'get',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
          };
          await axios(headers)
          .then(function(response) {
              console.log("enek ta gak",response.data.data);
                store.setState({
                    username: response.data.data.username,
                    useraddress: response.data.data.address,
                    usermail: response.data.data.email,
                    userphone: response.data.data.phone
                });
          })
    },

    getBandMerch: async state =>{
        const url = "http://localhost:8010/proxy/band/merch"
        console.log("cuuukkkkk", state.apikey)
        const headers = {
            method: 'get',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +state.apikey
            }
        };
        await axios(headers).then(function (response) {
            console.log("e3r2r32esca gak", response.data);
            store.setState({
                merchData: response.data.merchandises
            })
        })
    },
    getBandEvent: async state =>{
        const url = "http://localhost:8010/proxy/band/event"
        console.log("cuuukkkkk", state.apikey)
        const headers = {
            method: 'get',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +state.apikey
            }
        };
        await axios(headers).then(function (response) {
            console.log("e3r2r32esca gak", response.data);
            store.setState({
                eventData: response.data.events
            })
        })
    },

    editUser: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/user/profile"
        const headers = {
            method:'put',
            url: url,
            headers:{            
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.apikey
            },
            data:{
                password: state.password,
                address: state.useraddress,
                phone: state.userphone
            }
          };
        await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
                    store.setState({
                        username: response.data.profile.username,
                        useraddress: response.data.profile.address,
                        usermail: response.data.profile.email,
                        userphone: response.data.profile.phone,
                        isLogin: true
                    });
            })
       
    },
    postBuy: async (state, keyword) => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/user/transevent"
        const headers = {
            method:'post',
            url: url,
            headers:{            
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.apikey
            },
            params:{            
                'event_id': keyword,
                'quantity': state.quantity
            }
          };
        await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
                    store.setState({
                        transaksievent: response.data,
                        isLogin: true
                    });
            })
    
       
    },
    getUserTrans: async state =>{
        const url = "http://localhost:8010/proxy/user/transevent"
        console.log("cuuukkkkk",state.apikey)
        const headers = {
            method:'get',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
          };
          await axios(headers)
          .then(function(response) {
              console.log("enek ta gak",response.data.EventTransaksi);
                store.setState({
                    eventTrans: response.data.EventTransaksi
                });
          })
    },
    postBuymerch: async (state, keyword) => {
        // const data = { username: state.username, password: state.password };
        console.log("ini kiwot", keyword)
        const url = "http://localhost:8010/proxy/user/trans"
        const headers = {
            method:'post',
            url: url,
            headers:{            
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.apikey
            },
            params:{            
                'merch_id': keyword,
                'quantity': state.quantity
            }
          };
        await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
                    store.setState({
                        transaksimerch: response.data,
                        isLogin: true
                    });
            })
        },
    getUserTransmerch: async state =>{
        const url = "http://localhost:8010/proxy/user/trans"
        const headers = {
            method:'get',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
            };
            await axios(headers)
            .then(function(response) {
                console.log("enek ta gak",response.data.MerchTransaksi);
                store.setState({
                    merchTrans: response.data.MerchTransaksi
                });
            })
    },
    getBandData: async state =>{
        const url = "http://localhost:8010/proxy/band/profile"
        const headers = {
            method:'get',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
          };
          await axios(headers)
          .then(function(response) {
              console.log("enek ta gak",response.data.data);
                store.setState({
                    username: response.data.data.username,
                    bandname: response.data.data.bandName,
                    bandaddress: response.data.data.bandAddress,
                    bandmail: response.data.data.bandMail,
                    bandphone: response.data.data.bandPhone,
                    bandphoto: response.data.data.bandPhoto,
                    banddesc: response.data.data.bandDesc
                });
          })
    },
    editBand: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/band/profile"
        const headers = {
            method:'put',
            url: url,
            headers:{            
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.apikey
            },
            data:{
                password: state.password,
                bandName: state.bandname,
                bandDesc: state.banddesc,
                bandMail: state.bandmail,
                bandAddress: state.bandaddress,
                bandPhone: state.bandphone,
                bandPhoto: state.bandphoto
            }
          };
        await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
                    store.setState({
                        username: response.data.data.username,
                        isLogin: true
                    });
            })
       
    },
    getBandTrans: async state =>{
        const url = "http://localhost:8010/proxy/band/transevent"
        console.log("cuuukkkkk",state.apikey)
        const headers = {
            method:'get',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
          };
          await axios(headers)
          .then(function(response) {
              console.log("enek ta gak",response.data.EventTransaksi);
                store.setState({
                    eventTrans: response.data.EventTransaksi
                });
          })
    },
    getBandTransmerch: async state =>{
        const url = "http://localhost:8010/proxy/band/trans"
        const headers = {
            method:'get',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
            };
            await axios(headers)
            .then(function(response) {
                console.log("enek ta gak",response.data.MerchTransaksi);
                store.setState({
                    merchTrans: response.data.MerchTransaksi
                });
            })
    },
    postMerch: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/band/merch"
        const headers = {
            method:'post',
            url: url,
            headers:{            
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.apikey
            },
            data:{
                merch_name: state.merch_name,
                price: state.price,
                kategori: state.kategori,
                quantity: state.quantity,
                merch_desc: state.merch_desc,
                merch_photo: state.merch_photo
            }
          };
        await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
                    store.setState({
                        isLogin: true
                    });
            })
        },
    postEvent: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/band/event"
        const headers = {
            method:'post',
            url: url,
            headers:{            
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.apikey
            },
            data:{
                event_name: state.event_name,
                price: state.price,
                location: state.location,
                quantity: state.quantity,
                event_desc: state.event_desc,
                event_photo: state.event_photo
            }
            };
        await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
                    store.setState({
                        isLogin: true
                    });
            })
        },
    merchUpdate: async (state, keyword) => {
        console.log("jsajsank", keyword)
        const url = "http://localhost:8010/proxy/band/merch/"+keyword
        const headers = {
            method:'get',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
          };
          await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
                    store.setState({
                        merch_id: response.data.merchandise.merch_id,
                        merch_name: response.data.merchandise.merch_name,
                        price: response.data.merchandise.price,
                        kategori: response.data.merchandise.kategori,
                        quantity: response.data.merchandise.quantity,
                        merch_desc: response.data.merchandise.merch_desc
                    });
            })
    },
    merchDelete: async (state, keyword) => {
        console.log("jsajsank", keyword)
        const url = "http://localhost:8010/proxy/band/merch/"+keyword
        const headers = {
            method:'delete',
            url: url,
            headers:{            
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+state.apikey
        },
          };
          await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
            })
    },
    Editmerchand: async state => {
        // const data = { username: state.username, password: state.password };
        const url = "http://localhost:8010/proxy/band/merch/"+state.merch_id
        const headers = {
            method:'put',
            url: url,
            headers:{            
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+state.apikey
            },
            data:{
                merch_name: state.merch_name,
                price: state.price,
                kategori: state.kategori,
                quantity:state.quantity,
                merch_desc: state.merch_desc
            }
          };
        await axios(headers)
            .then(function(response) {
                console.log("lah loh lah loh",response.data);
            })
       
    },
    
})
