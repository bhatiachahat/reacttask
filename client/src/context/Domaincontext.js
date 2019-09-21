import React from 'react'
const DomainContext=React.createContext()
const DomainProvider=DomainContext.Provider
const DomainConsumer=DomainContext.Consumer
export {DomainProvider,DomainConsumer}