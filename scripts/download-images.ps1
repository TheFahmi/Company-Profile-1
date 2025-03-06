$imageUrls = @{
    # Hero images (1920x1080)
    "public\images\hero\home-hero.jpg" = "https://picsum.photos/1920/1080"
    "public\images\hero\about-hero.jpg" = "https://picsum.photos/1920/1080"
    "public\images\hero\services-hero.jpg" = "https://picsum.photos/1920/1080"
    "public\images\hero\contact-hero.jpg" = "https://picsum.photos/1920/1080"
    "public\images\hero\hero-image.jpg" = "https://picsum.photos/1920/1080"
    
    # About page images
    "public\images\about\mission.jpg" = "https://picsum.photos/800/600"
    
    # Team images (400x400)
    "public\images\team\ceo.jpg" = "https://picsum.photos/400/400"
    "public\images\team\cto.jpg" = "https://picsum.photos/400/400"
    "public\images\team\design-director.jpg" = "https://picsum.photos/400/400"
    
    # Service images (800x600)
    "public\images\services\web-dev.jpg" = "https://picsum.photos/800/600"
    "public\images\services\mobile-dev.jpg" = "https://picsum.photos/800/600"
    "public\images\services\cloud.jpg" = "https://picsum.photos/800/600"
    
    # Testimonial images (150x150)
    "public\images\testimonials\testimonial1.jpg" = "https://picsum.photos/150/150"
    "public\images\testimonials\testimonial2.jpg" = "https://picsum.photos/150/150"
    "public\images\testimonials\testimonial3.jpg" = "https://picsum.photos/150/150"
}

foreach ($path in $imageUrls.Keys) {
    $url = $imageUrls[$path]
    Write-Host "Downloading $url to $path"
    
    # Create directory if it doesn't exist
    $directory = Split-Path -Path $path -Parent
    if (!(Test-Path -Path $directory)) {
        New-Item -ItemType Directory -Path $directory -Force | Out-Null
    }
    
    # Download image
    Invoke-WebRequest -Uri $url -OutFile $path
    Start-Sleep -Milliseconds 100  # Small delay to prevent rate limiting
}
