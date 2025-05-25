$sourcePath = "C:\Users\dell\Downloads\santosh\saroj-main\assets\img\profile-large.png"
$destPath = "C:\Users\dell\Downloads\santosh\saroj-main\assets\img"

# Load the image
$image = [System.Drawing.Image]::FromFile($sourcePath)

# Create smaller versions
foreach ($size in @(@{width=100;filename="profile-small.png"}, @{width=150;filename="profile-medium.png"})) {
    $newWidth = $size.width
    $newHeight = [math]::Round($image.Height * ($newWidth / $image.Width))
    
    # Create new bitmap
    $newImage = New-Object System.Drawing.Bitmap $newWidth, $newHeight
    $graphics = [System.Drawing.Graphics]::FromImage($newImage)
    
    # Set high quality interpolation mode
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    
    # Draw the resized image
    $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
    
    # Save the image
    $newImage.Save("$destPath\$($size.filename)")
    
    # Clean up
    $graphics.Dispose()
    $newImage.Dispose()
}

# Clean up original image
$image.Dispose()
