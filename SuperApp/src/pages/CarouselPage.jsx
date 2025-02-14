import News from "./components/News"
import Profile from "./components/Profile"
import Weather from "./components/Weather"

const CarouselPage = () => {
  return (
    <div className="bg-gray-900 flex items-center">
        <div className=" max-w-5xl m-auto">
            <div className="grid lg:grid-cols-3 gap-10 bg-background p-6 rounded-lg">
                <div className="w-full lg:col-span-2">
                    <Profile/>
                    <Weather/>
                </div>
                <News/>
            </div>
        </div>
    </div>
  )
}

export default CarouselPage