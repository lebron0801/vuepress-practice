<template>
  <span>我的名字是：{{ myName }}</span>
</template>

<script>
export default {
  name: "OtherComponent",
  data: () => {
    return {
      myName: "lebron",
    };
  },
  mounted: function () {
    console.log("挂载成功!", window);
  },
};
</script>
