// import Button from '../Buttons/Button';
import BannerHead from '../general/Headings/BannerHead';
import TrainerSchedule from '../Trainers/TrainerSchedule';
const Homepage = () => {
    return (
        <>
            {/* <Header/> */}
            {/* <Outlet></Outlet> */}
            <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <BannerHead headText="Classes"></BannerHead>
                        <div className="d-flex justify-content-center">
                            {/* <Button gap="2" btnName="JOIN US"></Button>
                            <Button gap="0" varient="light" btnName="CONTACT US"></Button> */}
                        </div>
                    </div>
                </div>
            </div>
            <TrainerSchedule />
            {/* <Footer></Footer> */}
        </>
    )
}

export default Homepage