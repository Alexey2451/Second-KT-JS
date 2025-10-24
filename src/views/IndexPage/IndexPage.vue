<script setup lang="ts">
// updated section imports after restructuring
import { MainBanners } from '@/sections/Banners';
import { CategoriesView } from '@/sections/CategoriesView';
import { DiscountedItems } from '@/sections/DiscountItems';
import { MainBanner } from '@/sections/MainBanner';
import { MainProducts } from '@/sections/MainProducts';
import { RootLayout } from '@/sections/RootLayout';
import { SaleBanner } from '@/sections/SaleBanner';
</script>

<template>
    <RootLayout>
        <MainBanner />
        <MainBanners />
        <CategoriesView />
        <MainProducts />
        <DiscountedItems />
        <SaleBanner />
    </RootLayout>
</template>
