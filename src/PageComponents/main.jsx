import {ClientCommentSection} from './ClientCommentSection'
import { CredentialsSection } from './CredentialsSection'
import { ResourcesSection } from './ResourcesSection'
import {HeaderComponent} from './HeaderComponent'
import {DiscoverSection} from './DiscoverSection'
import {ServicesSection} from './ServicesSection'
import {ProductSection} from './ProductSection'
import {StatsSection} from './StatsSection'
import {HomeSection} from './HomeSection'

export const FinalProject = () =>{
    return(
        <>
            <HeaderComponent/>
            <HomeSection/>
            <StatsSection/>
            <DiscoverSection/>
            <ProductSection/>
            <ServicesSection/>
            <ClientCommentSection/>
            <CredentialsSection/>
            <ResourcesSection/>
        </>
    )
}