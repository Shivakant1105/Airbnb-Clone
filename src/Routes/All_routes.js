import Checkout from "../pages/Checkout";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/dashboard.page";
import Error from "../pages/Error";
import Login from "../pages/Login";
import ProductDescription from "../pages/ProductDescription";
import Signup from "../pages/Signup";

export const allRoutes =[{
    id:"1",
    path:"/login",
    component:<Login />,
    isprotected:false,
    issemiprotected:true
},
{
    id:"2",
    path:"/description/:id",
    component:<ProductDescription />,
    isprotected:true,
    issemiprotected:false
},
{
    id:"3",
    path:"/signup",
    component:<Signup />,
    isprotected:false,
    issemiprotected:true
},
{
    id:"4",
    path:"/",
    component:<Dashboard />,
    isprotected:false,
    issemiprotected:false
},
{
    id:"5",
    path:"/checkout",
    component:<Checkout />,
    isprotected:true,
    issemiprotected:false,
},
{
    id:"5",
    path:"*",
    component:<Error />,
    isprotected:false,
    issemiprotected:false
},
{
    id:"6",
    path:"/contact",
    component:<ContactUs />,
    isprotected:true,
    issemiprotected:false
}]