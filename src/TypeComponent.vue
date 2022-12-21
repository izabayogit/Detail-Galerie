<template>
  <div class="flex justify-between">
    <div class="ml-10 mt-8">
      <p class="font-bold">Type</p>
      <ol>
        <li class="pt-2">1.Detail Galerie | Desktop</li>
        <li class="pt-2">2.Detail Galerie</li>
      </ol>
    </div>
    <div class="mr-10 mt-8 mb-8">
      <table class="border-solid border-2">
        <tr class="border-solid">
          <td class="border-solid border-2 ml-10 p-2">Standard template</td>
          <td class="border-solid border-2 ml-10 p-2">
            <i class="fas fa-window-close p-2 text-red-50 icons"></i>
          </td>
        </tr>
        <tr class="border-solid border-2">
          <td class="border-solid border-2 p-2">Collection template</td>
          <td class="border-solid border-2 p-2">
            <i class="fas fa-window-close p-2 icons"></i>
          </td>
        </tr>
        <tr class="border-solid border-2">
          <td class="border-solid border-2 p-2">Blank template</td>
          <td class="border-solid border-2 p-2">
            <i class="fas fa-check-square p-2 icons-green"></i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icons {
  color: red;
}
.icons-green {
  color: green;
}
</style>
