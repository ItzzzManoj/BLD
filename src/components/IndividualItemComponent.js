import { RES_IMG_URL } from '../utils/constants';

const IndividualItemComponent = (props) => {

  let {
    itemCard: {
      card: {
        info: {
          name,
          description,
          price,
          imageId,
          defaultPrice
        } = {}
      } = {}
    } = {}
  } = props;

  return (
    <div className="border-b px-4 py-8 mt-4 flex justify-between items-center">
      <div className='w-9/12'>
        <h3 className="font-bold text-xl">
          {name}
        </h3>
        <h4 className="font-semibold">
          ₹ { price ? price/100 : defaultPrice/100 }
        </h4>
        <p className="text-gray-500 mt-4 text-sm">
          {description}
        </p>
      </div>
      { imageId ?
        <div className='relative'>
            <img
              src={ RES_IMG_URL + imageId }
              className="rounded-lg w-[156px] h-[144px] ml-10"
            />
            <button className="px-4 py-2 bg-black text-white rounded-xl absolute left-[75px] top-[125px]">
            Add +
          </button>
        </div> :         
        <button className="px-4 py-2 bg-black text-white rounded-xl">
          Add +
        </button>
      }

    </div>
  )
};

export default IndividualItemComponent;