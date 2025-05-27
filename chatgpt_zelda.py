import pygame
import sys

# Initialisierung
pygame.init()
TILE_SIZE = 64
GRID_SIZE = 10
WIDTH = HEIGHT = TILE_SIZE * GRID_SIZE
FPS = 60

# Farben
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
PLAYER_COLOR = (0, 100, 255)
ENEMY_COLOR = (255, 50, 50)

# Fenster
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Mini Zelda")
clock = pygame.time.Clock()

# Spielfiguren
player_pos = [0, 0]
enemy_pos = [9, 9]

def draw_grid():
    for x in range(0, WIDTH, TILE_SIZE):
        for y in range(0, HEIGHT, TILE_SIZE):
            rect = pygame.Rect(x, y, TILE_SIZE, TILE_SIZE)
            pygame.draw.rect(screen, WHITE, rect, 1)

def draw_entity(pos, color):
    x, y = pos
    rect = pygame.Rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    pygame.draw.rect(screen, color, rect)

def move_player(keys, pos):
    x, y = pos
    if keys[pygame.K_LEFT] or keys[pygame.K_a]:
        x = max(x - 1, 0)
    if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
        x = min(x + 1, GRID_SIZE - 1)
    if keys[pygame.K_UP] or keys[pygame.K_w]:
        y = max(y - 1, 0)
    if keys[pygame.K_DOWN] or keys[pygame.K_s]:
        y = min(y + 1, GRID_SIZE - 1)
    return [x, y]

def check_win(player, enemy):
    return player == enemy

# Hauptloop
running = True
won = False
while running:
    clock.tick(FPS)
    screen.fill(BLACK)
    draw_grid()
    draw_entity(enemy_pos, ENEMY_COLOR)
    draw_entity(player_pos, PLAYER_COLOR)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    if not won:
        keys = pygame.key.get_pressed()
        new_pos = move_player(keys, player_pos)
        if new_pos != player_pos:
            player_pos = new_pos
            if check_win(player_pos, enemy_pos):
                won = True
                print("Gewonnen!")

    if won:
        font = pygame.font.SysFont(None, 60)
        text = font.render("GEWONNEN!", True, (255, 255, 0))
        screen.blit(text, (WIDTH//2 - text.get_width()//2, HEIGHT//2 - text.get_height()//2))

    pygame.display.flip()

pygame.quit()
sys.exit()
