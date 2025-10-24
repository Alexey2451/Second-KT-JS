<script setup lang="ts">
// imports adjusted to new folders; component logic unchanged
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useUnit } from 'effector-vue/composition';

import { MainContainer } from '@/common/ui';

import { getAllProductsQuery, getProductByIdQuery } from '@/domain/Product';

import { ProductGallery } from '@/sections/ProductGallery';
import { ProductInfo } from '@/sections/ProductInfo';
import { RootLayout } from '@/sections/RootLayout';

const { pending } = useUnit(getAllProductsQuery);

const route = useRoute();

watch(() => route.params.id as string, getProductByIdQuery.start, { immediate: true });
</script>
<template>
    <RootLayout>
        <ProgressSpinner v-if="pending" class="m-auto flex mt-[20%]" />
        <MainContainer v-if="!pending" class="py-10">
            <div class="lg:flex lg:gap-[48px]">
                <ProductGallery />
                <ProductInfo />
            </div>
        </MainContainer>
    </RootLayout>
</template>
