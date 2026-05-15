from PIL import Image, ImageDraw
import os

size = 81
os.chdir('/Users/bytedance/projects/myminiprogram/native/images')

# 首页图标 - 房子形状
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.polygon([(size//2, 10), (10, 40), (size-10, 40)], fill='#8a8a8a')
draw.rectangle([(15, 40), (size-15, size-10)], fill='#8a8a8a')
draw.rectangle([(size//2-8, size-30), (size//2+8, size-10)], fill=(250, 250, 250, 255))
img.save('home.png')
print("home.png created")

# 首页选中图标
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.polygon([(size//2, 10), (10, 40), (size-10, 40)], fill='#FF6B35')
draw.rectangle([(15, 40), (size-15, size-10)], fill='#FF6B35')
draw.rectangle([(size//2-8, size-30), (size//2+8, size-10)], fill=(255, 255, 255, 255))
img.save('home-active.png')
print("home-active.png created")

# 券商研报图标 - 文档形状
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.rectangle([(15, 8), (size-15, size-8)], fill='#8a8a8a')
for i in range(4):
    y = 20 + i * 15
    draw.rectangle([(25, y), (size-25, y+8)], fill=(200, 200, 200, 255))
img.save('report.png')
print("report.png created")

# 券商研报选中图标
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.rectangle([(15, 8), (size-15, size-8)], fill='#FF6B35')
for i in range(4):
    y = 20 + i * 15
    draw.rectangle([(25, y), (size-25, y+8)], fill=(255, 200, 150, 255))
img.save('report-active.png')
print("report-active.png created")

# 行情工具图标 - 图表形状
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.line([(15, size-15), (size-15, size-15)], fill='#8a8a8a', width=3)
draw.line([(15, size-15), (15, 15)], fill='#8a8a8a', width=3)
points = [(20, 60), (35, 45), (50, 55), (65, 30)]
for i in range(len(points)-1):
    draw.line([points[i], points[i+1]], fill='#8a8a8a', width=3)
img.save('tool.png')
print("tool.png created")

# 行情工具选中图标
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.line([(15, size-15), (size-15, size-15)], fill='#FF6B35', width=3)
draw.line([(15, size-15), (15, 15)], fill='#FF6B35', width=3)
points = [(20, 60), (35, 45), (50, 55), (65, 30)]
for i in range(len(points)-1):
    draw.line([points[i], points[i+1]], fill='#FF6B35', width=3)
img.save('tool-active.png')
print("tool-active.png created")

print("\nAll native icons created!")
