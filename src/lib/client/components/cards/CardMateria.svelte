<script lang="ts">
  interface MapProps{
    title : string,
    desc : string,
    data : string,
    img : string
  }

  let {data, title, desc, img} : MapProps = $props();
</script>

<div class="rounded-md w-auto" 
  style="background-color : #F8F8F8; 
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
  <div>
    <img src={img} alt="">
  </div>
  <div class="pl-3 mt-2 mb-5">
      <button class="rounded-lg px-2 mr-2 text-xs" style="border: 2px solid green;"> 
        data
      </button>
  </div>
  <h1 class="pl-3" style="font-size: 16px; font-weight: 900; letter-spacing: 0%; color: #111827">
    {title}
  </h1>
  <p class="px-3"
    style="font-size: 12px;
    font-weight: 400;
    letter-spacing: 0%;
    text-align: justify;
    color: #485573;
    ">
    {desc}
  </p>
  <div class="px-3 my-5">
    <button class="w-full text-white rounded-md py-1" style="background-color: #485573;">
      Ver mais  
    </button>
  </div>
</div>