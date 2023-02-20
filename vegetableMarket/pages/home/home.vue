<template>
	<view class="home">
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="swiperOption.indicatorDots" :autoplay="swiperOption.autoplay" :interval="swiperOption.interval"
					:duration="swiperOption.duration">
					<swiper-item>
						<view class="swiper-item uni-bg-red">A</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">C</view>
					</swiper-item>
				</swiper>
			</view>
	</view>
	<view class="fish-grid">
		<uni-grid :column="4" :showBorder="false">
			<uni-grid-item>
				<view class="grid-box">鱼</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="grid-box">肉</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="grid-box">蔬</view>
			</uni-grid-item>
			<uni-grid-item>
				<view class="grid-box">蛋</view>
			</uni-grid-item>
		</uni-grid>
	</view>
	<uni-section title="为你推荐" type="line" padding="">
		<view class="fish-card">
			<view class="fish-card-left">
				
			</view>
			<view class="fish-card-right">
				<view class="top">
					<text class="title">强哥鱼档</text>
					<text class="integral">5.0</text>
				</view>
				<view class="middle">
					<view class="">
						<text>最低销价20$</text>
					</view>
					<view class="">
						<text>月售600</text>
						<text>人均20￥</text>
					</view>
				</view>
				<view class="bottom">
					<uni-tag text="内有躺椅" type="warning" :inverted="true"></uni-tag>
				</view>
			</view>
		</view>
	</uni-section>
</template>

<script setup>
import { reactive } from "vue";
	const swiperOption = reactive({
		indicatorDots:false,
		autoplay:true,
		interval:2000,
		duration:500,
	})
</script>

<style lang="scss">
	.uni-margin-wrap{
		padding: 8upx;
		.swiper{
			border-radius: 8upx;
			overflow: hidden;
			.swiper-item{
				width: 100%;
				height: 100%;
			}
			.uni-bg-red{
				background: red;
			}
			.uni-bg-green{
				background: green;	
			}
			.uni-bg-blue{
				background: blue;	
			}
		}
	}
	
	.fish-grid{
		margin-top: 12upx;
		.grid-box{
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
	}
	.fish-card{
		display: flex;
		gap: 20upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 8upx;
		&-left{
			width: 200upx;
			height: 200upx;
			background: red;
			border-radius: 8upx;
		}
		&-right{
			flex:1;
			.top{
				.title{
					font-weight: 600;
				}
				.integral{
					color: #8e8e8e;
					font-size: 12px;
					margin-left: 20upx;
				}
			}
			.middle{
				margin-top: 30upx;
				display: flex;
				justify-content: space-between;
				color: #8e8e8e;
				font-size: 12px;
				text+text{
					margin-left: 20upx;
				}
			}
			.bottom{
				margin-top: 32upx;
			}
		}
	}
	
</style>
