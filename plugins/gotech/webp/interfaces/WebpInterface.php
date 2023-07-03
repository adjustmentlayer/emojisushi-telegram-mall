<?php namespace GoTech\Webp\Interfaces;

use Illuminate\Http\UploadedFile;

interface WebpInterface
{
    /**
     * @param UploadedFile $image
     * @return mixed
     */
    public function make(UploadedFile $image);

    /**
     * @param $quality
     * @return mixed
     */
    public function quality($quality);

    /**
     * @param string $outputPath
     * @param int|null $quality
     * @return bool
     */
    public function save(string $outputPath, int $quality = null): bool;
}