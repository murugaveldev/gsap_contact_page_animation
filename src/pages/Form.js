import React from 'react'

const Form = () => {
    return (
        <>
            <div>

                <div class="flex items-center justify-center font-[poppins]">

                    <div class="mx-auto w-full md:px-8 py-4 ">

                        

                        <form>
                            <div class="mb-5">
                                <label for="name" class="mb-3 block text-[14px] font-medium text-[#07074D]">
                                    Full Name
                                </label>
                                <input type="text" name="name" id="name" placeholder="Full Name"
                                    class="w-full text-[12px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="phone" class="mb-3 block text-[14px] font-medium text-[#07074D]">
                                    Phone Number
                                </label>
                                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                    class="w-full text-[12px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="email" class="mb-3 block text-[14px] font-medium text-[#07074D]">
                                    Email Address
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email"
                                    class="w-full text-[12px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>


                            <div class="mb-5 pt-3">
                                <label class="mb-5 block text-[14px] font-semibold text-[#07074D] ">
                                    Address Details
                                </label>
                                <div class="-mx-3 flex flex-wrap">
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                            <input type="text" name="area" id="area" placeholder="Enter area"
                                                class="w-full text-[12px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                            <input type="text" name="city" id="city" placeholder="Enter city"
                                                class="w-full text-[12px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6  font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <button
                                    class="uppercase  hover:shadow-form w-full text-[12px] rounded-md bg-[#6A64F1] py-3 px-8 text-center  font-semibold text-white outline-none">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Form