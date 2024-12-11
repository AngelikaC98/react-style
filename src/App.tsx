import React from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [inputValue, setInputValue] = React.useState("");
  const [textareaValue, setTextareaValue] = React.useState("");

  return (
    <div className=" w-screen absolute top-0 left-0">
      <div className="overflow-hidden h-screen justify-betweenh-screen relative justify-between">
        <div
          className="relative w-full h-screen bg-cover bg-center p-0 mx-auto max-w-screen-2xl"
          style={{
            backgroundImage:
              "url('https://thephotoacademy.com/storage/815/Photo_1_the-photo-academy_How_to_learn_portrait_photography.jpg')",
          }}
        >
          <div className=" inset-0 bg-black bg-opacity-40"></div>
          <nav className="top-0 left-0 right-0 flex justify-between items-center px-10 py-4 z-10">
            <div className="text-white font-bold text-2xl">CLP</div>
            <ul className="flex space-x-8 text-white ">
              <Button className="z-20 hover:text-orange-200">Portfolio</Button>
              <Button className="z-20 hover:text-orange-200 ">About</Button>
              <Button className="z-20 hover:text-orange-200">Contact</Button>
            </ul>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-10 z-10">
            <h1 className="text-white text-7xl font-bold leading-tight ">
              Caitlyn Lee
            </h1>
            <p className="text-white text-3xl mt-2 tracking-widest  ">
              PHOTOGRAPHY
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center p-10 drop-shadow-2xl">
        <h1 className="text-3xl p-4">Album</h1>
        <Carousel className=" flex ">
          <CarouselContent className="h-[400px] w-[600px] items-end">
            <CarouselItem>
              <img src="https://phlearn.com/wp-content/uploads/2018/09/tip-1-annie-spratt.jpg" />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <img src="https://hunterpremo.com/wp-content/uploads/2020/11/20201110-premo-5.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://andrewstuder.com/wp-content/uploads/2019/03/Abiqua-Falls-Dog-web_-3-1.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://carnelos-photography.com/wp-content/uploads/2020/03/photographer-surrey-13.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://images.unsplash.com/photo-1733176094174-0e06953c7700?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <footer className="flex flex-col items-center justify-center bg-gray-200 gap-6 h-[400px]">
        <h1 className="text-3xl">Let´s talk</h1>

        <div className="gap-4 w-[500px] flex flex-col">
          <Input
            className="bg-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Email here"
          />

          <Textarea
            className="bg-white"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            placeholder="Enter more details"
          />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-[280px] justify-start text-left font-normal  ${
                !date ? "text-muted-foreground" : ""
              }`}
            >
              {date ? date.toLocaleDateString() : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button>Send</Button>
      </footer>
    </div>
  );
}

export default App;
