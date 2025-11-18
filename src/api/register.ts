import axiosInstance from "./axiosInstance";
import axios from "axios";

// 단일 이미지 업로드 응답 타입
export interface SingleImageUploadResponse {
  id: number;
  imageUrl: string;
  createdAt: string;
}

// 이미지 업로드 응답 타입 (배열)
export type ImageUploadResponse = SingleImageUploadResponse[];

// 상품 생성 요청 타입
export interface CreateProductRequest {
  memberId: number;
  title: string;
  category: string[];
  content: string;
  mainImageUrl: string;
  images: string[];
  price: number;
  status: string;
}

// 단일 이미지 업로드 API
export async function uploadSingleImage(
  imageFile: File
): Promise<SingleImageUploadResponse> {
  const formData = new FormData();
  formData.append("image", imageFile);

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const response = await axios.post<SingleImageUploadResponse>(
    `${baseURL}/api/v1/images/upload/single`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

// 다중 이미지 업로드 API
export async function uploadImages(
  imageFiles: File[]
): Promise<ImageUploadResponse> {
  const formData = new FormData();
  imageFiles.forEach(file => {
    formData.append("images", file);
  });

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const url = `${baseURL}/api/v1/images/upload`;

  console.log("이미지 업로드 요청 URL:", url);
  console.log("baseURL:", baseURL);
  console.log("업로드할 파일 개수:", imageFiles.length);

  const response = await axios.post<ImageUploadResponse>(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

// 상품 생성 API
export async function createProduct(
  productData: CreateProductRequest
): Promise<any> {
  const response = await axiosInstance.post("/api/v1/products", productData);
  return response.data;
}
