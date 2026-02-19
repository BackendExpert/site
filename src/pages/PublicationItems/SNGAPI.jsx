import React from 'react'
import Hero from '../../component/Publications/Hero'
import About from '../../component/Publications/About'
import { ShieldCheck, Database } from 'lucide-react'
import Abstract from '../../component/Publications/Abstract'


const SNGAPI = () => {
    return (
        <div>
            <Hero
                subtitle="Designing a Secure National Government API Infrastructure (SNGAPI)for Digital Public Services in Sri Lanka - "
                shortdesc="Governance-Driven and Education-Integrated Digital Public Infrastructure Model"
                version="Technical Report"
                focusareas={[
                    "Digital Public Infrastructure",
                    "Backend Security Architecture",
                    "Governance Frameworks",
                    "Education Reform Policy"
                ]}
            />

            <About
                label="About the Research"
                title1="Engineering Secure Systems."
                title2="Designing Sustainable Policy."
                description="This body of work integrates technical system design with governance and policy-level analysis."
                paragraphs={[
                    "The SNGAPI framework proposes a governance-driven API infrastructure for Sri Lanka.",
                    "Hybrid authorization models mitigate administrative misuse in enterprise systems.",
                    "Policy research explores vehicle saturation risk and graduate skill mismatch."
                ]}
                highlights={[
                    {
                        icon: <ShieldCheck />,
                        title: "Security-First Architecture",
                        desc: "Backend systems designed with policy-based access control."
                    },
                    {
                        icon: <Database />,
                        title: "Digital Infrastructure",
                        desc: "National-scale API governance framework proposals."
                    }
                ]}
            />

            <Abstract
                title1={"Secure Digital Infrastructure for Sri Lanka"}
                paragraphs={[
                    "Sri Lanka’s public digital service ecosystem remains institutionally fragmented, characterized byisolated government systems lacking unified API governance, federated authentication,standardized authorization control, and enforceable interoperability policies. This fragmentationlimits secure inter-ministerial communication, increases administrative risk, and constrainsscalable digital transformation.",
                    "This technical report proposes the Secure National Government API Infrastructure (SNGAPI), agovernance-driven national API ecosystem designed to unify digital public services under acentralized Zero Trust–aligned architecture. The framework integrates OAuth 2.0 and OpenIDConnect–based federated identity management, Policy-Based Access Control (PBAC), hybridauthorization with fine-grained administrative override governance, tiered API accessenforcement, and immutable audit logging aligned with Sri Lanka’s Personal Data Protection ActNo. 9 of 2022.",
                    "Drawing from validated prior research on adaptive middleware security and administrative misusemitigation, SNGAPI extends these models into a sovereign Digital Public Infrastructure (DPI)framework. Additionally, the architecture introduces a regulated educational sandbox layer thatembeds production-mirrored API environments into university curricula to address systemicgraduate skill mismatch. "
                ]}
            />
        </div>
    )
}

export default SNGAPI