"use client"

import { Hero } from "@/components";
import {yachts} from "@/constants";
import YachtCard from "@/components/YachtCard";

export default function Home() {
  //TODO события пишем через on... обработчики без on
  //TODO в каждом компоненте деструктуризировать props и описывать каждое из свойств
  //TODO события пишем через on... обработчики без on
  // TODO в components декомпозировать по папкам (отдельную папку для Hero для CharterYachtButton и тд) и также фото сортировать по папкам с названиями по тому что на них
  // TODO переименовать все car в Yacht
  // TODO можно было бы в каталоге реализовать поиск
  // TODO использовать что-то вроде prettier для выравнивания кода
  // TODO добавить подгрузку в каталоге по кнопке посмотреть еще (если бы данные были не хардкод)
  // TODO в константе писал на русском, что категорически нежелательн, но было необходимо вывести на русском языке, а делать remap не хотелось )

  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className='mt-8 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold font-semibold'>Каталог яхт</h1>
          <p className='text-2xl'>Выберите понравившуюся яхту</p>
        </div>

        <section>
          <div className='home__cars-wrapper'>
            {yachts?.map((yacht) => (
              <YachtCard yacht={yacht} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
