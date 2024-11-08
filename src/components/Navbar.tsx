import { Button } from "./Button"

export const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex justify-between max-w-screen-xl mx-auto">
                <div className="text-2xl font-bold flex flex-col justify-center">
                    100xDev
                </div>
                <div>
                    <Button onClick={() => {
                        window.location.href = "https://www.google.com"
                    }}>
                        Google
                    </Button>
                    <Button onClick={() => {
                        window.location.href = "https://www.youtube.com"
                    }}>
                        Youtube
                    </Button>
                </div>
            </div>
        </div>
    )
}