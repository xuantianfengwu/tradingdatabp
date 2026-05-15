from PIL import Image, ImageDraw
import os

size = 81
os.chdir('/Users/bytedance/projects/myminiprogram/native/images')

# 交易数据图标 - 数据图表形状
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.line([(15, size-15), (size-15, size-15)], fill='#8a8a8a', width=3)
draw.line([(15, size-15), (15, 15)], fill='#8a8a8a', width=3)
points = [(20, 60), (35, 45), (50, 55), (65, 30)]
for i in range(len(points)-1):
    draw.line([points[i], points[i+1]], fill='#8a8a8a', width=3)
img.save('data.png')
print("data.png created")

# 交易数据选中图标
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.line([(15, size-15), (size-15, size-15)], fill='#1E88E5', width=3)
draw.line([(15, size-15), (15, 15)], fill='#1E88E5', width=3)
points = [(20, 60), (35, 45), (50, 55), (65, 30)]
for i in range(len(points)-1):
    draw.line([points[i], points[i+1]], fill='#1E88E5', width=3)
img.save('data-active.png')
print("data-active.png created")

# 交易策略图标 - 策略形状
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.polygon([(size//2, 15), (30, 40), (size-30, 40)], fill='#8a8a8a')
draw.rectangle([(25, 40), (size-25, size-15)], fill='#8a8a8a')
draw.line([(25, 55), (size-25, 55)], fill='white', width=3)
draw.line([(25, 70), (size-25, 70)], fill='white', width=3)
img.save('strategy.png')
print("strategy.png created")

# 交易策略选中图标
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
draw.polygon([(size//2, 15), (30, 40), (size-30, 40)], fill='#1E88E5')
draw.rectangle([(25, 40), (size-25, size-15)], fill='#1E88E5')
draw.line([(25, 55), (size-25, 55)], fill='white', width=3)
draw.line([(25, 70), (size-25, 70)], fill='white', width=3)
img.save('strategy-active.png')
print("strategy-active.png created")

print("\nNew icons created!")
