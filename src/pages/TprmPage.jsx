import React from "react"
import LandingPageNavbar from '../components/LandingpageNavbar'
import Footer from "../components/Footer"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <LandingPageNavbar />
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 ">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Streamline Third-Party Risk Management with AI
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    TPRM software powered by Genai automates and simplifies the entire third-party risk management
                                    process, helping you identify, assess, and monitor risks with ease.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <div className="flex items-center gap-2">
                                    <XIcon className="h-6 w-6 text-primary" />
                                    <span className="text-sm font-medium">AI-Powered</span>
                                </div>
                                <p className="text-muted-foreground">
                                    Leverage the power of Genai to streamline and automate your third-party risk management processes,
                                    from risk assessment to ongoing monitoring.
                                </p>
                                <div className="space-x-4">
                                    <a
                                        href="#"
                                        className="inline-flex h-9 bg-blue-600 hover:bg-blue-500 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white text-primary-foreground shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Get Started
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Request Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex items-center justify-center bg-gray-100 mt-8 py-12 md:py-24 lg:py-32">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Streamline Your Third-Party Risk Management
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    TPRM software powered by Genai offers a comprehensive suite of features to help you manage
                                    third-party risks effectively.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <RatioIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Risk Assessment</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Leverage Genai to automatically assess and categorize risks associated with your third-party vendors.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <CheckIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Due Diligence</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Streamline your due diligence process with automated information gathering and risk scoring.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <MonitorIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Continuous Monitoring</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Continuously monitor your third-party vendors for changes in risk profiles and receive real-time
                                    alerts.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <FlagIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Comprehensive Reporting</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Generate detailed reports on your third-party risk management program, including risk assessments and
                                    mitigation efforts.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <BotIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Automated Workflows</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Streamline your TPRM processes with automated workflows, reducing manual effort and improving
                                    efficiency.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <CompassIcon className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Compliance Management</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Ensure your third-party relationships are compliant with industry regulations and internal policies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Hear from our customers about how TPRM software has transformed their third-party risk
                                management.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-background p-6 rounded-lg shadow-md">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
                                        <UserIcon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">Jane Doe</h4>
                                        <p className="text-sm text-muted-foreground">Risk Manager, Acme Corp</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    "Acme's TPRM software has been a game-changer for our\n organization. The AI-powered features have
                                    streamlined our\n third-party risk management process, saving us time and\n resources."
                                </p>
                            </div>
                            <div className="bg-background p-6 rounded-lg shadow-md">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
                                        <UserIcon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">John Smith</h4>
                                        <p className="text-sm text-muted-foreground">Compliance Officer, Acme Inc</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    "The reporting and compliance features of Acme's TPRM software\n have been invaluable in helping us
                                    maintain regulatory\n compliance and visibility into our third-party relationships."
                                </p>
                            </div>
                            <div className="bg-background p-6 rounded-lg shadow-md">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center">
                                        <UserIcon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">Sarah Lee</h4>
                                        <p className="text-sm text-muted-foreground">Procurement Manager, Acme LLC</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    "Acme's TPRM software has streamlined our due diligence\n process and helped us make more informed
                                    decisions about our\n third-party vendors. The AI-powered risk assessment is a\n game-changer."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex items-center justify-center bg-gray-100 py-12 md:py-24 lg:py-32 border-t">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Ready to Streamline Your Third-Party Risk Management?
                            </h2>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Sign up for a free trial or request a demo to see how Acme's TPRM software can transform your
                                third-party risk management processes.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                            <a
                                href="#"
                                className="inline-flex h-10 items-center bg-blue-600 text-white justify-center rounded-md  px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Start Free Trial
                            </a>
                            <a
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Request Demo
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

function BotIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}


function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function CompassIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}


function FlagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}


function MonitorIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
    )
}


function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function RatioIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="12" height="20" x="6" y="2" rx="2" />
            <rect width="20" height="12" x="2" y="6" rx="2" />
        </svg>
    )
}


function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}