"use client"

import {YachtFeedbackProps} from "@/types";
import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

const YachtFeedback = ({ isOpenForm, closeModal }: YachtFeedbackProps) => {
  return (
    <Transition appear show={isOpenForm} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='overflow-y-auto overflow-x-auto flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script>
                <iframe src="https://forms.yandex.ru/cloud/64d96ca8c417f3853139248f/?iframe=1" frameBorder="0"
                        name="ya-form-64d96ca8c417f3853139248f" width="650" height={290}></iframe>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}


export default YachtFeedback;
