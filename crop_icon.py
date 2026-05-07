from PIL import Image, ImageDraw
import os

# Path to your favicon
favicon_path = os.path.join("public", "favicon.png")

try:
    # Open the image
    img = Image.open(favicon_path)

    # Force RGBA for transparency support
    img = img.convert('RGBA')

    # 1. Square Crop Logic
    width, height = img.size
    size = min(width, height)
    
    left = (width - size) // 2
    top = (height - size) // 2
    right = left + size
    bottom = top + size
    
    # Perform the crop
    img = img.crop((left, top, right, bottom))

    # 2. Precise Mask Generation
    # We create the mask using the EXACT current size of the cropped img
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    
    # Draw the circle to fit perfectly in the square
    draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)

    # 3. Apply the mask
    img.putalpha(mask)

    # 4. Save
    img.save(favicon_path, 'PNG')
    
    print(f"--- SUCCESS ---")
    print(f"✓ Circular favicon created at: {favicon_path}")
    print(f"✓ Final Dimensions: {img.size[0]}x{img.size[1]}px")

except Exception as e:
    print(f"--- ERROR ---")
    print(f"An error occurred: {e}")