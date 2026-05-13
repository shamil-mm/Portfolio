"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { workData } from "@/assets/assets";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useParams } from "next/navigation";

const WorkDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = useParams();
  const project = workData.find((item) => item.id === Number(id));
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h2>
          <Link
            href="/home"
            className=" items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors inline-flex"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.image.length) % project.image.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/home"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3"></div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h1>

              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row ">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 w-fit overflow-hidden rounded-full bg-gradient-to-r from-black to-black px-9 py-4 text-white cursor-pointer"
              >
                <span className="relative inline-flex overflow-hidden text-sm gap-2 tracking-wide">
                  <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
                    View Live Project
                  </span>
                  <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View Live Project
                  </span>
                </span>
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 group relative z-10 overflow-hidden cursor-pointer "
              >
           

                <span className="relative inline-flex overflow-hidden text-sm gap-2 tracking-wide">
                  <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
                    View Source Code
                  </span>
                  <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    View Source Code
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.image[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 10vw, 30vw"
              />

              {/* Navigation Arrows */}
              {project.image.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {project.image.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.image.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>{project.detailedDescription}</p>
              </div>
            </div>

            {/* Image Thumbnails */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.image.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 relative ${
                      index === currentImageIndex ? "ring-4 ring-blue-500" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Preview ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 10vw, 20vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Live Project</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
