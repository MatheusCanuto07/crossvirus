<script lang="ts">
  import CardMateria from "../../cards/CardMateria.svelte"
  import { icons } from "$lib/utils";
</script>

{#snippet cabecalho(title : string, subTitle : string, icon: Function)}
<div class="flex">
  <div class="px-3 py-0.5 bg-slate-200 rounded-md flex justify-center items-center">
    {@html icon({width : 35, height : 35})}
  </div>
  <div class="ml-4">
    <p class="sub-title-article -mb-3">{title}</p>
    <h1 class="title-article">{subTitle}</h1>
  </div>
</div>
{/snippet}

<div class="px-10 lg:px-36 mt-14">
  {@render cabecalho("Nossa comunicação", "Entrevistas", icons.newspaper)}
  
  <div class="gap-8 flex flex-col justify-center md:full md:flex-row md:justify-around md:space-x-8 mt-10 mb-10">
    <CardMateria 
    title={"Uma revisão do vírus da dengue e seus vetores"}
    desc={""}
    data={"26/11/2024"}
    img={"images/cardWallpaper.png"}
    />
    <CardMateria 
    title={"Uma revisão do vírus da dengue e seus vetores"}
    desc={""}
    data={"26/11/2024"}
    img={"images/cardWallpaper.png"}
    />
  </div>

  {@render cabecalho("Artigos", "Publicações Científicas", icons.tv)}
  <div class="gap-8 flex flex-col justify-center md:full md:flex-row md:justify-around md:space-x-8 mt-10 mb-10">
    <CardMateria 
    title={"Uma revisão do vírus da dengue e seus vetores"}
    desc={""}
    data={"26/11/2024"}
    img={"images/cardWallpaper.png"}
    />
    <CardMateria 
    title={"Uma revisão do vírus da dengue e seus vetores"}
    desc={""}
    data={"26/11/2024"}
    img={"images/cardWallpaper.png"}
    />
  </div>

  {@render cabecalho("Informações similares", "Notícias", icons.chat)}
  <div class="gap-8 flex flex-col justify-center md:full md:flex-row md:justify-around md:space-x-8 mt-10 mb-10">
    <CardMateria 
    title={"Uma revisão do vírus da dengue e seus vetores"}
    desc={""}
    data={"26/11/2024"}
    img={"images/cardWallpaper.png"}
    />
    <CardMateria 
    title={"Uma revisão do vírus da dengue e seus vetores"}
    desc={""}
    data={"26/11/2024"}
    img={"images/cardWallpaper.png"}
    />
  </div>
</div>

<style>
  .sub-title-article{
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: #981010;
  }
  .title-article{
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 0%;
  }
</style>