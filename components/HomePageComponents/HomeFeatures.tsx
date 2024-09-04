"use client";
import React, { useEffect, useRef, useState } from "react";
import { GradientContainer } from "@/components/ui/gradient-container";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Subheading } from "@/components/ui/subheading";
import { FeatureIconContainer } from "@/components/HomePageComponents/feature-icon-container";
import { FaBolt } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "@/components/HomePageComponents/card";
import { SkeletonOne } from "@/components/HomePageComponents/skeletons/first";
import { SkeletonTwo } from "@/components/HomePageComponents/skeletons/second";
import { SkeletonThree } from "@/components/HomePageComponents/skeletons/third";
import { SkeletonFour } from "@/components/HomePageComponents/skeletons/fourth";
import { SkeletonFive } from "@/components/HomePageComponents/skeletons/fifth";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export const HomeFeatures = () => {
  return (
    <>
      <Container className="py-20 max-w-5xl mx-auto  relative z-40 ">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Automate your social media</Heading>
        <Subheading>
          Proactiv houses a rich set of features to automate your marketing
          efforts across all social medias
        </Subheading>
        <BackgroundBeamsWithCollision>
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
              <Card className="lg:col-span-2">
                <CardTitle>Post to multiple platforms at once</CardTitle>
                <CardDescription>
                  With our AI-powered platform, you can post to multiple
                  platforms at once, saving you time and effort.
                </CardDescription>
                <CardSkeletonContainer>
                  <SkeletonOne />
                </CardSkeletonContainer>
              </Card>

              <Card>
                <CardSkeletonContainer className="max-w-[16rem] mx-auto">
                  <SkeletonTwo />
                </CardSkeletonContainer>
                <CardTitle>Analytics for everything</CardTitle>
                <CardDescription>
                  Check analytics, track your posts, and get insights into your
                  audience.
                </CardDescription>
              </Card>
              <Card>
                <CardSkeletonContainer>
                  <SkeletonThree />
                </CardSkeletonContainer>
                <CardTitle>Integrated AI</CardTitle>
                <CardDescription>
                  Proactiv uses AI to help you create engaging content.
                </CardDescription>
              </Card>
              <Card>
                <CardSkeletonContainer
                  showGradient={false}
                  className="max-w-[16rem] mx-auto"
                >
                  <SkeletonFour />
                </CardSkeletonContainer>
                <CardTitle>Easy Collaboration</CardTitle>
                <CardDescription>
                  Proactive can integrate with Zapier, Slack and every other
                  popular integration tools.
                </CardDescription>
              </Card>
              <Card>
                <CardSkeletonContainer>
                  <SkeletonFive />
                </CardSkeletonContainer>
                <CardTitle>Know your audience</CardTitle>
                <CardDescription>
                  Based on your audience, create funnels and drive more traffic.
                </CardDescription>
              </Card>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </Container>
    </>
  );
};
