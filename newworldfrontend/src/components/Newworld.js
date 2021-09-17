import React from 'react'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Route } from 'react-router'
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from './ApplicationViews'
import { ServerProvider } from './Servers,Factions,Settlements/ServerProvider'
import { FactionProvider } from './Servers,Factions,Settlements/FactionProvider'

function Newworld() {
        return (<>
                <Route Path="/" render={() => {
                        return <>
                                <NavBar />
                                <ApplicationViews />
                        </>
                }} />

                <Route path="/login" render={() => {
                        return <Login />
                }} />

                                <Route path="/register" render={() => {
                                        return <>
                                        <FactionProvider>
                                        <ServerProvider>
                                        <Register />
                                        </ServerProvider>
                                        </FactionProvider>
                                        </>
                                }} />

        </>)
}

export default Newworld