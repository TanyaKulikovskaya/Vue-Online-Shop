<template>
    <div>
        <skeleton theme="opacity" shape="radius" bg-color="#dcdcdc">
            <row style="margin-top: 40px; margin-left: -20px">
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="1" shape="rect"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="1" shape="rect"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="1" shape="rect"></tb-skeleton>
                </i-col>
            </row>
            <row style="margin-top: 10px; margin-left: -20px">
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
            </row>
             <row style="margin-top: 60px; margin-left: -20px">
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="1" shape="rect"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="1" shape="rect"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="1" shape="rect"></tb-skeleton>
                </i-col>
            </row>
            <row style="margin-top: 10px; margin-left: -20px">
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-left: 20px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
            </row>
        </skeleton>
    </div>
</template>

<script>
import { TbSkeleton,Skeleton } from 'tb-skeleton'

export default {
    name: 'catalog-skeleton',
    components: {
        TbSkeleton,
        Skeleton
    }
}
</script>