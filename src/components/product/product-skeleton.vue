<template>
    <div>
        <skeleton theme="opacity" shape="radius" bg-color="#dcdcdc">
            <row style="padding-left: 10px; padding-right: 10px; margin-top: 20px">
                <i-col :span="8">
                    <tb-skeleton :aspect-ratio="1" shape="rect"></tb-skeleton>
                </i-col>
                <i-col :span="16">
                    <row style="padding-left: 10px;">
                        <i-col :span="22" style="margin-top: 5px">
                            <tb-skeleton :aspect-ratio="0.1"></tb-skeleton>
                        </i-col>
                        <i-col :span="16" style="margin-top: 10px">
                            <tb-skeleton :aspect-ratio="0.1"></tb-skeleton>
                        </i-col>
                        <i-col :span="12" style="margin-top: 10px">
                            <tb-skeleton :aspect-ratio="0.15"></tb-skeleton>
                        </i-col>
                    </row>
                </i-col>
            </row>
            <row style="padding-left: 10px; padding-right: 10px; margin-top: 10px">
                <i-col :span="8" style="padding-right: 10px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
                <i-col :span="8" style="padding-right: 10px">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
                <i-col :span="8">
                    <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
                </i-col>
            </row>
        </skeleton>
    </div>
</template>

<script>
import { TbSkeleton,Skeleton } from 'tb-skeleton'

export default {
    name: 'product-skeleton',
    components: {
        TbSkeleton,
        Skeleton
    }
}
</script>