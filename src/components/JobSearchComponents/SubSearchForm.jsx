import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "react-router-dom";
import * as Switch from "@radix-ui/react-switch";
import { Form } from "react-router-dom";

const SubSearchForm = ({ totalJobs, contract, sort_by }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleValueChange = (value, name) => {
    let params = {};
    setSearchParams((prev) => {
      for (const [key, value] of prev.entries()) {
        params = { ...params, [key]: value };
      }

      return { ...params, [name]: value, page: 1, start: 1, max: 8 };
    });
  };

  return (
    <div className="flex  items-center justify-between">
      <div className="capitalize font-semibold text-lg leading-loose text-gray-600">
        {totalJobs || 0} jobs founds
      </div>
      <div className="hidden md:flex  md:gap-x-5">
        <div className="flex gap-x-2 items-center">
          <label className="text-gray-500" htmlFor="contract">
            Contract
          </label>

          <Switch.Root
            className="w-[42px] h-[25px] rounded-[9999px] bg-gray-300  relative data-[state=checked]:bg-gray-600"
            defaultChecked={contract}
            id="contract"
            name="contract"
            // onClick={() => handleValueChange(true, "contract")}
            onCheckedChange={(value) => handleValueChange(value, "contract")}
          >
            <Switch.Thumb className="block w-[21px] h-[21px] rounded-full bg-white translate-x-[2px] duration-100 data-[state=checked]:translate-x-[19px]" />
          </Switch.Root>
        </div>
        <Select.Root
          // onValueChange={(value) => handleValueChange(value, "sort_by")}
          name="sort_by"
          defaultValue={sort_by}
        >
          <Select.Trigger className="flex gap-x-2 items-center text-gray-500 rounded-lg  border-[2px] border-gray-200 bg-white px-5 py-1 focus:outline-none">
            <Select.Value placeholder="Sort By" />
            <Select.Icon>
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content>
              <Select.Viewport className=" rounded-lg bg-white  border-[2px] border-gray-200 ">
                <Select.Item
                  value="hybrid"
                  className="text-gray-500 px-5 py-2  hover:outline-none hover:bg-purple-500 hover:text-white"
                >
                  <Select.ItemText> Hybrid</Select.ItemText>
                </Select.Item>
                <Select.Item
                  value="date"
                  className="text-gray-500 px-5 py-2 hover:outline-none hover:bg-purple-500 hover:text-white"
                >
                  <Select.ItemText> Date</Select.ItemText>
                </Select.Item>

                <Select.Item
                  value="salary"
                  className="text-gray-500 px-5 py-2 hover:outline-none hover:bg-purple-500 hover:text-white"
                >
                  <Select.ItemText> Salary</Select.ItemText>
                </Select.Item>
                <Select.Item
                  value="relevance"
                  className="text-gray-500 px-5 py-2 hover:outline-none hover:bg-purple-500 hover:text-white"
                >
                  <Select.ItemText> Relevance</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  );
};
export default SubSearchForm;
