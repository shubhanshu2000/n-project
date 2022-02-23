import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';











function SideMenu() {
  return <div className='w-64 '>
    <aside className='flex  flex-col pt-6 ml-6'>
      <div className='flex justify-between items-center mr-6'>
        <div className='flex items-center'>
          <p className='bg-blue-500 font-medium px-[0.5rem] py-[0.2rem]  rounded-full'>N</p>
          <h1 className='text-white font-bold text-2xl ml-4'>Name</h1>
        </div>
        <div className='flex flex-col'>

          <div className='relative w-3 h-[0.12rem]  left-4 top-[0.42rem] bg-[#808191]'></div>
          <KeyboardBackspaceIcon className='text-white text-3xl ' />
          <div className='relative w-3 h-[0.12rem]  left-4 bottom-[0.41rem] bg-[#808191] opacity-30'></div>
        </div>
      </div>





      <div className=' text-[#808191] cursor-pointer mr-6 font-semibold mt-6'>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl  hover:text-white'>
          <GridViewOutlinedIcon />
          <p className='ml-10'>Home</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <InsertChartOutlinedIcon />
          <p className='ml-10'>Section 1</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <CandlestickChartOutlinedIcon />
          <p className='ml-10'>Section 2</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <DataThresholdingOutlinedIcon />
          <p className='ml-10'>Section 3</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <MonetizationOnOutlinedIcon />
          <p className='ml-10'>Section 4</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <AnimationOutlinedIcon />
          <p className='ml-10'>Section 5</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <CircleOutlinedIcon />
          <p className='ml-10' >Section 6</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <SignalCellularAltOutlinedIcon />
          <p className='ml-10' >Section 7</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <ShareOutlinedIcon />
          <p className='ml-10'>Section 8</p>
        </div>
        <div className='flex my-2 hover:bg-[#808191] hover:animate-wiggle hover:py-2 hover:px-4 hover:rounded-xl hover:text-white'>
          <ArticleOutlinedIcon />
          <p className='ml-10'>Documentation</p>
        </div>
      </div>




      <div className='flex mt-28'>
        <div className='flex py-1 px-4 text-xs mr-2 items-center rounded-xl bg-[#808191] text-white'>
          <p className='bg-blue-500  font-medium px-[0.5rem] py-[0.2rem]  rounded-full'>N</p>
          <AttachMoneyIcon className='text-base -mr-1' />
          <p>0.90</p>
        </div>
        <div className='flex text-blue-500 py-2 px-4 text-xs items-center rounded-xl  bg-[#A3E3FF]'>
          <p className='font-medium text-sm'>Buy</p>
          <AttachMoneyIcon className='text-base -mr-1' />
          <p>XYZ</p>
        </div>
      </div>



      <div className='flex items-center  mt-8'>
        <LanguageOutlinedIcon className='text-[#808191]' />
        <div className='bg-[#353945] ml-4 py-1 px-2 flex rounded-3xl'>
          <DarkModeOutlinedIcon className='text-[#808191] mr-2' />
          <CircleIcon className='text-blue-500' />
        </div>
      </div>

    </aside>

  </div>
}
export default SideMenu