import { Router } from "express";
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send("Learning Express From CodeHelp,  Got a GET request")
})

userRouter.post('/sign-in', (req, res) => {
    res.send("User Sign in Page, Got a POST request")
})

userRouter.put('/update-profile', (req, res) => {
    res.send("Updating Profile, Got a PUT request")
})

userRouter.delete('/delete-profile', (req, res) => {
    res.send("Deleting Profile, Got a DELETE request")
})

export default userRouter;