<script lang="ts">
  import { icons } from "$lib/utils"

  interface Props{
    textCard: {
      title: string,
      desc: string,
      price: string,
      quantHabitantes: string,
      autor: boolean[]
    }
  }

  let { textCard } : Props = $props();
</script>

<div class="card rounded-2xl text-accent border-card px-6 py-4">
  <div class="text-center">
    <h2 class="font-extrabold mt-3 text-2xl">{textCard.title}</h2>
    <p class="mt-1 sub-title-princing">Acesso Limitado, sem funcionalidades premium</p>
    <p class="mt-8 text-4xl font-bold">R$45,00</p>
    <p class="-mt-1 text-lg font-light text-gray-800">/1.000 habitantes
    </p>
  </div>
  <div>
    <div class="flex mt-8">
      <span class=""></span>
    </div>
    <div class="flex mt-2">
      <span class="text-red-500">{@html icons.x()}</span>
      <span class="ml-2">Lorem ipsum dolor sit amet.</span>
    </div>
    <div class="flex mt-2">
      <span class="text-red-500">{@html icons.x()}</span>
      <span class="ml-2">Lorem ipsum dolor sit amet.</span>
    </div>
    <div class="flex mt-2">
      <span class="text-red-500">{@html icons.x()}</span>
      <span class="ml-2">Lorem ipsum dolor sit amet.</span>
    </div>
    <div class="flex mt-2">
      <span class="text-green-500">{@html icons.x()}</span>
      <span class="ml-2">Lorem ipsum dolor sit amet.</span>
    </div>
    <div class="flex mt-2">
      <span class="text-green-500">{@html icons.x()}</span>
      <span class="ml-2">Lorem ipsum dolor sit amet.</span>
    </div>
  </div>
  <button class="btn w-full text-neutral mt-5" style="background-color: #485573;">
    Entre em contato
  </button>
</div>

<style>
  .sub-title-princing{
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0%;
    text-align: center;
    color:#485573;
  }
  .border-card{
    border: 2px solid rgb(72, 85, 115, 0.40);
  }
  .colorRed{
    color: red;
  }
  .colorGreen{
    color: green;
  }
</style>
