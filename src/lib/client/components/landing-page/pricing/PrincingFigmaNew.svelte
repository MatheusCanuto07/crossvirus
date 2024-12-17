<script lang="ts">
  import CardPrincingFigma from "../../cards/CardPrincingFigma.svelte"

  let pequenasCidades = {
    title: 'Pequenas Cidades',
    desc: 'Acesso Limitado, sem funcionalidades premium',
    price: 'R$45,00',
    quantHabitantes: '/1.000 habitantes',
    autor: [true, false, false, false, false]
  }

  let mediasCidades = {
    title: 'Cidades Médias',
    desc: 'Acesso as funcionalidades premium e suporte basico.',
    price: 'R$4.500,00',
    quantHabitantes: '/100.000 habitantes',
    autor: [true, true, false, false, false]
  }

  let metropoles = {
    title: 'Metropoles',
    desc: 'Acesso as funcionalidades premium suporte de alta prioridade.',
    price: 'R$9.500,00',
    quantHabitantes: '/1.000.000 habitantes', 
    autor: [true, true, true, true, true]
  }
</script>

<div class="gap-8 flex flex-col justify-center md:full md:flex-row md:space-x-8 px-10 lg:px-36 mt-5">
  <CardPrincingFigma textCard={pequenasCidades}/>
  <CardPrincingFigma textCard={mediasCidades}/>
  <CardPrincingFigma textCard={metropoles}/>
</div>