import React, { useState } from "react";
import GanarelModal from "./GanarelModal";

const UserDataInput = () => {
    const [selectItem,setSelectItem] = useState("Select your passion name")
    const [data,setData] = useState({});
    const handleUserData =()=>{
        const {name,accept} = data;
        console.log(name,accept,selectItem);
    }
  return (
    <div>
      <div>
        <h1 className="flex justify-center items-center w-full h-[70px] bg-blue-400 text-white rounded-md text-3xl font-bold ">
          User Inputs Fields
        </h1>
        <div className="mt-5 mx-5">
          <div>
            <label htmlFor="userName" className="">
              Name
            </label>
            <input
            onChange={(e)=>setData({...data,name: e.target.value})}
              type="text"
              name="name"
              id="userName"
              placeholder="type your name"
              className="input input-bordered w-full my-2 "
            />
          </div>
          <div>
            <label htmlFor="userName" className="">
              Sectors
            </label>
            <input
              type="text"
              disabled
              value={selectItem}
              className="input input-bordered w-full my-2  "
            />
            <div className="w-full h-[300px] overflow-scroll my-2 px-4">
            {/* Manufacturing  */}
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium bg-blue-100 rounded-lg">
                  Manufacturing
                </div>
                <div className="collapse-content text-lg ">
                {/* Construction materials */}
                  <div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
  Construction materials
  </div>
  <div className="collapse-content text-lg "> 
    <button
    onClick={()=>setSelectItem("Electronics and Optics")}
     className="text-start w-full bg-blue-100 p-5 my-1 rounded-lg">Electronics and Optics</button>
      {/* Food and Beverage */}
    <div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
  Food and Beverage
  </div>
  <div className="collapse-content text-lg mx-4 flex flex-col"> 
    <button
     onClick={()=>setSelectItem("Bakery & confectionery products")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg"> Bakery & confectionery products</button>
    <button
     onClick={()=>setSelectItem("Beverages")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg"> Beverages</button>
    <button
      onClick={()=>setSelectItem("Fish & fish products")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg"> Fish & fish products</button>

    <button
      onClick={()=>setSelectItem("Meat & meat products")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Meat & meat products</button>
    <button
      onClick={()=>setSelectItem(" Milk & dairy products")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg"> Milk & dairy products</button>
    <button
      onClick={()=>setSelectItem(" Milk & dairy products")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg"> Sweets & snack food</button>
    <button
      onClick={()=>setSelectItem("Other")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Other</button>
  </div>
</div>
{/* Furniture */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Furniture 
</div>
<div className="collapse-content text-lg  flex flex-col"> 
<button
      onClick={()=>setSelectItem("Bathroom/sauna")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Bathroom/sauna</button>
<button
      onClick={()=>setSelectItem("Bedroom")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Bedroom</button>
<button
      onClick={()=>setSelectItem("Children's room")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Children's room</button>
<button
      onClick={()=>setSelectItem("Living room")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Living room</button>
<button
      onClick={()=>setSelectItem("Office")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Office</button>
<button
      onClick={()=>setSelectItem("Other (Furniture)")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Other (Furniture)</button>
<button
      onClick={()=>setSelectItem("Outdoor")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Outdoor</button>
<button
      onClick={()=>setSelectItem("Project furniture")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Project furniture</button>
</div>
</div>
{/* Machinery */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Machinery 
</div>
<div className="collapse-content text-lg  flex flex-col"> 
<button
      onClick={()=>setSelectItem("Machinery components")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Machinery components</button>
<button
      onClick={()=>setSelectItem("Machinery equipment/tools")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Machinery equipment/tools</button>
<button
      onClick={()=>setSelectItem("Manufacture of machinery")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Manufacture of machinery</button>
  {/* Maritime */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Maritime 
</div>
<div className="collapse-content text-lg  flex flex-col"> 
<button
      onClick={()=>setSelectItem("Aluminium and steel workboats")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Aluminium and steel workboats</button>
<button
      onClick={()=>setSelectItem("Boat/Yacht building")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Boat/Yacht building</button>
<button
      onClick={()=>setSelectItem("Ship repair and conversion")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Ship repair and conversion</button>
</div>
</div>
<button
      onClick={()=>setSelectItem("Metal structuresmachinery")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Metal structures</button>
<button
      onClick={()=>setSelectItem("Other")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Other</button>
<button
      onClick={()=>setSelectItem("Repair and maintenance service")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Repair and maintenance service</button>
</div>
</div>
{/* Metalworking */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Metalworking 
</div>
<div className="collapse-content text-lg  flex flex-col"> 

{/* Construction of metal structures */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Construction of metal structures 
</div>
<div className="collapse-content text-lg  flex flex-col"> 
<button
      onClick={()=>setSelectItem("Houses and buildings")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Houses and buildings</button>
<button
      onClick={()=>setSelectItem("Metal products")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Metal products</button>
</div>
</div>

{/* Metal works  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Metal works  
</div>
<div className="collapse-content text-lg  flex flex-col"> 
{/* CNC-machining  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
CNC-machining 
</div>
<div className="collapse-content text-lg  flex flex-col"> 
<button
      onClick={()=>setSelectItem("Forgings, Fasteners")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Forgings, Fasteners</button>
<button
      onClick={()=>setSelectItem("Gas, Plasma, Laser cutting ")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Gas, Plasma, Laser cutting </button>
<button
      onClick={()=>setSelectItem("MIG, TIG, Aluminum welding")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">MIG, TIG, Aluminum welding</button>
</div>
</div>

</div>
</div>

</div>
</div>
{/* Plastic and Rubber  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Plastic and Rubber 
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Packaging")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Packaging</button>
     <button
      onClick={()=>setSelectItem("Plastic goods")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Plastic goods</button>
        {/* Plastic processing technology */}
        <div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Plastic processing technology
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Blowing")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Blowing</button>
     <button
      onClick={()=>setSelectItem("Moulding")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Moulding</button>
     <button
      onClick={()=>setSelectItem("Plastics welding and processing")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Plastics welding and processing</button>
</div>
</div>

     <button
      onClick={()=>setSelectItem("Plastic profiles")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Plastic profiles</button>

</div>
</div>
{/* Plastic and Rubber End */}
{/* Printing  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Printing
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Advertising")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Advertising</button>
     <button
      onClick={()=>setSelectItem("Book/Periodicals printing")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Book/Periodicals printing</button>
</div>
</div>
{/* Printing End */}
{/* Textile and Clothing  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Textile and Clothing
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Clothing")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Clothing</button>
     <button
      onClick={()=>setSelectItem("Textile")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Textile</button>
</div>
</div>
{/* Textile and Clothing End */}
{/* Wood  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Wood
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Wooden building materials")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Wooden building materials</button>
     <button
      onClick={()=>setSelectItem("Wooden housesOther")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Wooden housesOther</button>
     <button
      onClick={()=>setSelectItem("Other (Wood)")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Other (Wood)</button>
</div>
</div>
{/* Wood End */}
  </div>
</div>
           
                </div>
              </div>
              {/* Manufacturing end  */}
                {/*  Creative industries  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-3 rounded-lg">
 Creative industries
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Energy technology ")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Energy technology </button>
     <button
      onClick={()=>setSelectItem("EnvironmentService")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">EnvironmentService</button>
     <button
      onClick={()=>setSelectItem("Business services")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Business services</button>
     <button
      onClick={()=>setSelectItem("Engineering")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Engineering</button>
     {/* Information Technology and Telecommunications  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Information Technology and Telecommunications
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Data processing, Web portals, E-marketing")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Data processing, Web portals, E-marketing</button>
     <button
      onClick={()=>setSelectItem("Programming, Consultancy")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Programming, Consultancy</button>
     <button
      onClick={()=>setSelectItem("Software, Hardware")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Software, Hardware</button>
     <button
      onClick={()=>setSelectItem("Telecommunications")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Telecommunications</button>
</div>
</div>
{/* Information Technology and Telecommunications End */}
<button
      onClick={()=>setSelectItem("Tourism")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Tourism</button>
<button
      onClick={()=>setSelectItem("Translation services")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Translation services</button>
</div>
</div>
{/*  Creative industries End */}
{/* Transport and Logistics  */}
<div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 mb-2 rounded-lg">
Transport and Logistics
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Air")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Air</button>
     <button
      onClick={()=>setSelectItem("Rail")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Rail</button>
     <button
      onClick={()=>setSelectItem("Road")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Road</button>
     <button
      onClick={()=>setSelectItem("Water")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Water</button>
</div>
</div>
{/* Transport and Logistics End */}

            </div>
          </div>

          <div className="form-control">
  <label className="cursor-pointer flex items-center gap-2 mt-4">
    <input
    onChange={(e)=>setData({...data,accept: e.target.checked})}
     type="checkbox" name="check" className="checkbox checkbox-info" />
    <span className="label-text"> Agree to terms</span>
  </label>
</div> 
    <button 
    onClick={handleUserData} 
     className="btn btn-ghost bg-blue-300 my-5 w-full">Save</button>
        </div>
      </div>
      <GanarelModal></GanarelModal>
    </div>
  );
};

export default UserDataInput;

{/* Plastic and Rubber  */}
{/* <div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-lg font-medium bg-blue-100 my-2 rounded-lg">
Food and Beverage
</div>
<div className="collapse-content text-lg  flex flex-col"> 
     <button
      onClick={()=>setSelectItem("Bedroom")}
     className="text-start bg-blue-100 p-5 my-1 rounded-lg">Bedroom</button>
</div>
</div> */}
{/* Plastic and Rubber End */}